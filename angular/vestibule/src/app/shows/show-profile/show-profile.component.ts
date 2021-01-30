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
  isChanged = false
  isLoading = false
  hasSaveError = false

  profileForm = this.fb.group({
    quality: ['', Validators.required],
    subtitles: ['', Validators.required],
    high_quality_source: ['', Validators.required],
    download_automatically: ['', Validators.required],
    wait: ['', Validators.required],
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
    })

    this.profileForm.valueChanges.subscribe(val => {
      this.hasSaveError = false
      this.updateIsChanged()
    });
  }

  onSubmit() {
    this.isLoading = true
    this.hasSaveError = false

    this.showsService.updateShowProfile(this.showImdbID, this.profileForm.value).subscribe(
      data => {
        this.showProfile = data
        this.updateIsChanged()
        this.isLoading = false
      },
      () => {
        this.isLoading = false
        this.hasSaveError = true
      }
    )
  }

  updateIsChanged() {
    this.isChanged =  JSON.stringify(this.profileForm.value) !== JSON.stringify(this.showProfile)
  }
}
