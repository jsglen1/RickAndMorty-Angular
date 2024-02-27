import { Component, OnInit } from '@angular/core';
import { DetailCharacterService } from '../../../services/detail-character/detail-character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeCharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-detail-character',
  standalone: true,
  imports: [],
  templateUrl: './detail-character.component.html',
  styleUrl: './detail-character.component.css',
})
export class DetailCharacterComponent implements OnInit {
  character!: TypeCharacter;

  constructor(
    private detailCharacterService: DetailCharacterService,
    private activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id = params['id'];
      this.getDetailCharacter(id);
    });
  }

  getDetailCharacter(id: number) {
    const res = this.detailCharacterService.getDetailCharater(id);
    res.subscribe({
      next: (res) => {
        this.character = res;
      },
      error: (e) => console.log(e),
    });
  }
}
