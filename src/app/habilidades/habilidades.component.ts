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
      description:
        'O atirador a distância é a posição de dano contínuo para a equipe, na dinamica do jogo é o alvo que fica mais forte a medida que o jogo passa',
    },
    meio: {
      image: '../../assets/images/magic.png',
      description:
        'A rota do meio é uma posição com funções variadas no jogo, cada campeão exerce uma função diferente de acordo com a necessidade do time',
    },
    selva: {
      image: '../../assets/images/bush.png',
      description:
        'O caçador é uma posição que seu estilo de jogo sempre muda com tomadas de decisões e tem a função de garantir objetivos neutros para o time',
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
