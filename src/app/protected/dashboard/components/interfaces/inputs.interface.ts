export interface Input  {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    publications: Publication[];
  }

export interface Publication {
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
    created: string;
}

export interface CreatePublication {
    id_career: number;
    title: string | null;
    description: string | null;
    is_question: boolean;
}