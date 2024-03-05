import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from './../models/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapByid: FaceSnapsService) { }
  valueButtonOne: string = "Oh Snap!";


  ngOnInit() {

  }
  onAddSnap() {
    if (this.valueButtonOne === "Oh Snap!") {
      this.faceSnapByid.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.valueButtonOne = "Oops, un Snap!";
    } else {
      this.faceSnapByid.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.valueButtonOne = "Oh Snap!";
    }


  }

}
