import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty/rickandmorty.service';
import { TypeCharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css',
})
export class RickandmortyComponent implements OnInit {
  constructor(private rickandmortyService: RickandmortyService) {}
  ngOnInit(): void {
    this.getCharacters(1);
  }

  page = 1;
  listCharacters: TypeCharacter[] = [];

  getCharacters(page: number) {
    const res = this.rickandmortyService.getListCharacters(page);
    res.subscribe({
      next: (res) => {
        const data = res.results;
        this.listCharacters = data;
        this.page = page;
      },
      error: (e) => console.log(e),
    });
  }
}
