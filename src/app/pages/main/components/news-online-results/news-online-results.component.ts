import { NewsOnlineResultsInterface } from '../../../../services/news-service/interfaces/news-online-results.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-news-online-results',
    templateUrl: './news-online-results.component.html',
    styleUrls: ['./news-online-results.component.less'],
})
export class NewsOnlineResultsComponent {
    @Input() news: NewsOnlineResultsInterface;
}
