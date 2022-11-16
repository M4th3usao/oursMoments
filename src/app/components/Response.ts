export interface Response<T>{
    message?: string,
    data:  T; //pode ser qualquer coisa, vai depender do usuário.
}