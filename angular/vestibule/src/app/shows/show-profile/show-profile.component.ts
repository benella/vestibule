import { Component, Input, OnInit } from '@angular/core';
import { ShowProfile } from "../show";
import { FormBuilder, Validators } from "@angular/forms";
import { ShowsService } from "../shows.service";

@Component({
  selector: 'vestibule-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.scss']
})
export class ShowProfileComponent implements OnInit {
  @Input() showProfile: ShowProfile
  @Input() showImdbID: string
  @Input() showCustomLookupNames: string

  isChanged = false
  isLoading = false
  hasSaveError = false

  profileForm = this.fb.group({
    quality: ['', Validators.required],
    subtitles: ['', Validators.required],
    high_quality_source: ['', Validators.required],
    download_automatically: ['', Validators.required],
    wait: ['', Validators.required],
    custom_lookup_names: ['']
  })

  qualities = [
    '720P',
    '1080P',
    '4K'
  ]

  waitTimes = [
    {name: 'Don\'t Wait', value: 'N'},
    {name: 'Up to a Day', value: '1D'},
    {name: 'Up to 2 Days', value: '2D'},
    {name: 'Up to 3 Days', value: '3D'},
    {name: 'Up to 4 Days', value: '4D'},
    {name: 'Up to 5 Days', value: '5D'},
    {name: 'Up to 6 Days', value: '6D'},
    {name: 'Up to a Week', value: '1W'},
    {name: 'Forever', value: 'F'},
  ]

  constructor(private fb: FormBuilder, private showsService: ShowsService) { }

  ngOnInit(): void {
    this.profileForm.setValue({
      quality: this.showProfile.quality,
      subtitles: this.showProfile.subtitles,
      high_quality_source: this.showProfile.high_quality_source,
      download_automatically: this.showProfile.download_automatically,
      wait: this.showProfile.wait,
      custom_lookup_names: this.showCustomLookupNames
    })

    this.profileForm.valueChanges.subscribe(val => {
      this.hasSaveError = false
      this.updateIsChanged()
    });
  }

  onSubmit() {
    let settingsLoading = true
    let profileLoading = true

    this.isLoading = true
    this.hasSaveError = false

    const customLookupName = this.profileForm.get('custom_lookup_names').value as string

    if (customLookupName) {
      this.showsService.updateShowSettings(this.showImdbID, { imdb_id: this.showImdbID, custom_lookup_names: customLookupName }).subscribe(
        showDetails => {
          settingsLoading = false
          this.showCustomLookupNames = showDetails.custom_lookup_names
          this.updateIsChanged()
          this.isLoading = profileLoading && settingsLoading
      })
    } else {
      settingsLoading = false
    }

    this.showsService.updateShowProfile(this.showImdbID, this.profileForm.value).subscribe(
      data => {
        this.showProfile = data
        this.updateIsChanged()
        profileLoading = false
        this.isLoading = profileLoading && settingsLoading
      },
      () => {
        profileLoading = false
        this.isLoading = profileLoading && settingsLoading
        this.hasSaveError = true
      }
    )
  }

  updateIsChanged() {
    this.isChanged =  JSON.stringify(this.profileForm.value) !== JSON.stringify({...this.showProfile, ...{ custom_lookup_names: this.showCustomLookupNames }})
  }
}
