import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  roles = {
    atirador: {
      image: '../../assets/images/archery.png',
      description: 'Adc é uma role ingrata',
    },
    meio: {
      image: '../../assets/images/magic.png',
      description: 'Mid é uma role ingrata',
    },
    selva: {
      image: '../../assets/images/bush.png',
      description: 'Jungle é uma role ingrata',
    },
  };

  roleImage = '';
  roleDescription = '';

  roleId = '';

  constructor() {}

  roleSelected(role, type) {
    this.roleImage = this.roles[role].image;
    this.roleDescription = this.roles[role].description;
    this.roleId = type;
  }

  ngOnInit(): void {
    this.roleSelected('atirador', 'adc');
  }
}
