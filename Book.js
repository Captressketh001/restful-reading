export class Book {
    constructor(title,author,description,pages,currentPage,read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page){
        if (page < 1 || page > this.pages ){
            return 0;
        }
        if(page >= 1 && page < this.pages){
            this.currentPage = page;
            return 1;
        }
        if(page === this.pages){
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

export const books = [
    new Book("Becoming a Leader", "Myles Munroe", "You cannot become a leader if you dont know your purpose", 200, 1, false),
    new Book("Commanding your Morning", "Cindy Trimm", "What have you put into the atmosphere?", 167, 1, false),
    new Book("How To Win Friends","Dale Carnegie", "You can become anybody friend", 450, 3, false)
];