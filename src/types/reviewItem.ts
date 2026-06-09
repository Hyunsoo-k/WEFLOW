export type Tag = 
  | '전체'
  | '병·의원'
  | '교육'
  | '카페·F&B'
  | '전문 서비스'
  | '운동·뷰티'
  | '판매'
  | '인테리어';

export type ReviewItem = {
  text: string;
  stars: number;
  author: string;
  bizName: string;
  tag: Tag;
};