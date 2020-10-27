export class User {
    constructor(
        public name:string, 
        public company:string,
        public blog:string,
        public location:string,
        public bio:string,
        public repos:number,
        public createdate:Date,
        public updatedate:Date){}
}
