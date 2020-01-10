import { Component, OnInit } from '@angular/core';
import { NewsData } from './news-data';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})

export class NewsListComponent implements OnInit {
  news: NewsData[];
  constructor() { }

  ngOnInit() {
    this.news = [
      new NewsData(1, 'TOP 20 NOWOROCZNYCH POSTANOWIEŃ. TYLKO KILKA PROCENT UDAJE SIĘ ZREALIZOWAĆ', 'Nowy Rok to czas refleksji i snucia planów. Według statystyk 30-55% Polaków podejmuje noworoczne postanowienia, co nie jest wynikiem odbiegającym od światowej średniej. Jedna trzecia w nas chce zmienić tylko 1 rzecz w najbliższym roku, a ponad połowa badanych robi 2-5 założeń na następne 365 dni. Oczywiście większości z nich nie zostanie spełniona, aby podczas następnego Sylwestra podjąć kolejną próbę. Tylko 8-15% osób realizuje noworoczne obietnice, ale warunki dla życiowych zmian są na początku stycznia wręcz idealne, więc warto próbować. Statystyki również wskazują, że szanse na spełnienie postanowień są 10-krotnie wyższe w Nowym Roku, niż innej porze. W okresie poświątecznym w spełnieniu celu pomaga nam pewnego rodzaju społeczny trend, w którym całe otoczenie również stara się coś zmienić. Duże znaczenie ma także oddziaływanie mediów i duża ilość wolnego czasu.', 'https://zalajkowane.pl/wp-content/uploads/2017/01/Noworoczne-postanowienia-realizowanie-marze%C5%84.jpg'),
      new NewsData(2, 'Dlaczego rezygnujemy z noworocznych postanowień?', 'Od pierwszego stycznia zaczynasz nowe życie! No, może jednak od drugiego, po Sylwestrze trzeba przecież zregenerować siły, żeby jeszcze energiczniej wdrażać noworoczne postanowienia. A tych, jak co roku, jest bez liku: restrykcyjna dieta, regularne treningi, nadgonienie zaległych sezonów „Gry o tron”…', 'http://zdrofitowo.pl/wp-content/uploads/2017/01/zdrofit_blog_800x525_170103.png')
    ]
  }

  removeItem(i: number) {
    this.news.splice(i, 1);
  }

  addItem(news: NewsData) {
    const id = this.news.length + 1;
    news.id = id;
    this.news.push(news);
  }

}