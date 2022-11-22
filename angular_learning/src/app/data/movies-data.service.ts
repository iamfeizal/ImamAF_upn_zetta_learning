import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor() { }

  data: any[] = [
    {
      id: 1,
      title: "Kung Fu Panda",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/kung_fu_panda.jfif"
    },
    {
      id: 2,
      title: "Kung Fu Panda 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/kung_fu_panda_2.jfif"
    },
    {
      id: 3,
      title: "Kung Fu Panda 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/kung_fu_panda_3.jfif"
    },
    {
      id: 4,
      title: "Kung Fu Panda 4",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/kung_fu_panda_4.jpg"
    },
    {
      id: 5,
      title: "Cars 1",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/cars.jfif"
    },
    {
      id: 6,
      title: "Cars 2",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/cars_2.jfif"
    },
    {
      id: 7,
      title: "Cars 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/cars_3.jfif"
    },
    {
      id: 8,
      title: "How To Train Your Dragon",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/how_to_train_your_dragon.jfif"
    },
    {
      id: 9,
      title: "How To Train Your Dragon",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/how_to_train_your_dragon_hidden_world.jpg"
    },
    {
      id: 10,
      title: "How To Train Your Dragon",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Exercitationem eos dolorem voluptas quasi veniam fugit,",
      tahunrilis: 2008,
      actor: [
        "Jack Black", "Jackie Chan", "James Hong", "Lucy Liu", "Dustin Hoffman"
      ],
      img: "../../../assets/img/movie/How_to_Train_Your_Dragon_Homecoming_poster.jpg"
    },
  ]
}
