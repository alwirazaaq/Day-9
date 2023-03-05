// class Testimonial {
//     constructor(quote, image) {
//         this._quote = quote
//         this._image = image
//     }

//     get quote() {
//         return this._quote
//     }

//     get image() {
//         return this._image
//     }

//     get html() {
//         return `<div class="testimonial">
//             <img src="${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.author}</p>
//         </div>`
//     }
// }

// class AuthorTestimonial extends Testimonial {
//     constructor(author, quote, image) {
//         super(quote, image)
//         this._author = author
//     }

//     get author() {
//         return this._author
//     }
// }

// class CompanyTestimonial extends Testimonial {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }

//     get author() {
//         return this._company + " Company"
//     }
// }

// const testimonial1 = new AuthorTestimonial("Surya paloh", "partai jas biru", "ASSETS/IMG/rick astley.jpg")

// const testimonial2 = new AuthorTestimonial("meppo", "asa de kontll", "ASSETS/IMG/rick astley.jpg")

// const testimonial3 = new CompanyTestimonial("lalaland", "tampan dan berani", "ASSETS/IMG/rick astley.jpg")

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].html
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML


const testimonialData = [
    {
        author: "Hoodwink",
        quote: "Drop your gold and run along then.",
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c9/Hoodwink_icon.png/revision/latest?cb=20201217205959",
        rating: 5
    },
    {
        author: "bugg",
        quote: "Apasih!",
        image: "ASSETS/IMG/rick astley.jpg",
        rating: 1
    },
    {
        author: "bugg",
        quote: "Okelah",
        image: "ASSETS/IMG/rick astley.jpg",
        rating: 3
    },
    {
        author: "bugg ",
        quote: "WOWWWW KEREN!",
        image: "ASSETS/IMG/rick astley.jpg",
        rating: 4
    },
    {
        author: "buggg ",
        quote: "Good Mantap!",
        image: "ASSETS/IMG/rick astley.jpg",
        rating: 4
    },
]


function allTestimonials() {
    let testimonialHTML = '';

    testimonialData.forEach((item) => {
        testimonialHTML += `<div class="testimonial">
                     <img src="${item.image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                 </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialHTML;
}

allTestimonials()


function filterTestimonials(rating) {
    let testimonialHTML = '';

    // rating : 1

    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

    // [
    //     {
    //         author: "Kevin Pratama",
    //         quote: "Apasih!",
    //         image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         rating: 1
    //     },
    // ]

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h1> Data not found! </h1>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += `<div class="testimonial">
                <img src="${item.image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testimonialHTML
}