export interface Details {
    id: number;
    id_user: number;
    username: string;
    photo_user: string;
    id_parent?: any;
    id_career: number;
    score: number;
    description: string;
    is_question: boolean;
    title: string;
    commentsList: CommentsList[];
    responseslist: Responseslist[];
    updated?: string;
    created: string;
  }
  

 export interface Responseslist {
    id: number;
    id_user: number;
    username: string;
    photo_user: string;
    id_parent: number;
    id_career: number;
    score: number;
    description: string;
    is_question: boolean;
    title?: any;
    updated?: string;
    created: string;
    commentsList?: CommentsList2[];
    responseslist?: any;
  }
  
 export interface CommentsList2 {
    id: number;
    id_user: number;
    id_input: number;
    description: string;
    created: string;
    updated?: any;
    username: string;
    photo_user: string;
  }
  
 export interface CommentsList {
    id: number;
    id_user: number;
    username: string;
    photo_user: string;
    id_input: number;
    description: string;
    created: string;
    updated?: string;
  }