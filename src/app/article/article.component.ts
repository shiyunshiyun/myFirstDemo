import { Component, OnInit } from '@angular/core';
// import {AlarmPipe} from '../pipe/alarm.pipe';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {

  word = '之前做法，是直接用正则 ，即带着标签和文本一起匹配，但这样有一个问题 ，就是如果关键字在html标签中存在，例如 关键字，一定会命中当前元素中的造成页面混如果不用正则虽然有效，但是 职能替换收个出现的元素 ，不能替换所有，我也不太清楚是否有能替换所有的函数（除了正则）后来我改进了，我直接把所有的元素的文本先都取出来，对着文本一通改，这样能保证一定匹配对，匹配完整，但是问题是，如果这个dom结构是个多层级的嵌套，把匹配的结果在打上原来的标签又是一件麻烦事，我索性就自定义他们的标签，来完成展示。我知道这样肯定也不合理。后来我又尝试 按照 文本的标签来匹配 ，意思就是把大段文本拆成单个元素，分别匹配，当我觉得这样更加合理和可靠时，我又发现问题：我们的数据是爬下来的，所以格式又不是特别统一，各种各样格式，这样的及时按照p标签来匹配，肯定就连贯起来了，页面效果也就由原来的换行之前现在不换行, 而且没法判断还有未知的其他格式.';
  keyWords = "之前";
  temp: any;
  content: any;
  contents: any;
  text: any;
  value: any;
  values: any;
  constructor() { }

  ngOnInit(): void {
    // this.temp = this.word.replace(/之前/g, '<span style="background-color: red;" class="highlight">之前</span>');
  }

  search(){
    this.text = document.getElementById('text');
    this.value = this.text.value;
    this.content = document.getElementById('content');
    this.contents = this.content.innerHTML;
    this.values = this.contents.split(this.value);
    this.content.innerHTML = this.values.join('<span style="background:red;">' + this.value + '</span>');
  }

}
