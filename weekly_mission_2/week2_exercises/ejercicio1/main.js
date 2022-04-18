console.log("MODELAR LOS SIGUIENTES DIAGRAMAS EN OBJETOS DE JS")
// MODELAR LOS SIGUIENTES DIAGRAMAS DE GITHUB EN OBJETOS DE JS
console.log("")
console.log(">> GITHUB (REPOSITORY, ISSUE, PR)")
/* 
REPOSITORY
+name
+author
+language
+numberOfCommits
+stars
+forks
+issues_open
+issues_close
+getTotalIssues()
+getGeneralInfo()
*/

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log("")

/*
   ISSUE
+title
+repositoryNameAssociated
+status
+numberOfComments
+labels
+author
+dateCreated
+lastUpdated
+getTitleAndAuthor()
+getGeneralInfo()
*/

const issue = {
    title: "feedback live#5",
    repoNameAssociated: "LaunchX",
    status: "OPEN",
    numberOfComments: 50,
    labels: 10,
    author: "Carlo Gilmar",
    dateCreated: "April 13 2022",
    lastUpdated: new Date(),
    getTitleAndAuthor: function(){
        return `El titulo del issue es: ${this.title} y el autor es: ${this.author}.`
    },
    getGeneralInfo: function(){
        return `This issue was created on ${this.dateCreated} y lleva ${this.numberOfComments} comments.`
    }
}

console.log("Titulo del issue: " + issue.title)
console.log("nombre del repo asociado: " + issue.repoNameAssociated)
console.log(issue.getGeneralInfo())
console.log("")



/*
PULL REQUEST
+title
+branchName
+dateCreated
+status
+repositoryNameAssociated
+getStatus()
+getTitleAndAutor()
*/


const PullRequest = {
    title: "change of readme",
    author: "Fernando de Lafuente",
    branchName: "main",
    dateCreated: "April 13 2022",
    status: "OPEN",
    repoNameAssociated: "LaunchX",
    getstatus: function(){
        return `El status del PR es: ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `El titulo del PR es: ${this.title} y el autor es: ${this.author}`
    }
}

console.log("Titulo del PullRequest: " + PullRequest.title)
console.log("nombre del repo asociado: " + PullRequest.repoNameAssociated)
console.log(PullRequest.getTitleAndAuthor())
console.log("")


///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// Ahora te pido modelar objetos de las siguientes plataformas, 
// puedes desarrollar esto como tu gustes, ve a cada app y mira la información que puedes modelar. 
// (Tu determinas los valores de cada llave, son meramente didacticos):
/*
=> Twitter
user
trending_topic
hashtag

=> Facebook
user
post
biography

=> Uber
profile
travel
*/

//////////////////////////////////////////////////////////////////////////////////////////
console.log(">> TWITTER (USER, TRENDING TOPIC, HASHTAG)")
// TWITTER (user)
const twitterUser = {
    firstName: "Fernando",
    lastName: "de Lafuente",
    age: 33,
    userName: "@delafuentequiroz",
    email: "fernando.delafuenteq@gmail.com",
    getFullNameAndUser: function(){
        return `El nombre completo del usuario de Twitter ${this.userName} es: ${this.firstName} ${this.lastName}`
    }
}

console.log(twitterUser.getFullNameAndUser())
console.log("")

// TWITTER (trending_topic)
const trendingTopic = {
    topicType: "Gaming",
    topicName: "Zelda BOTW2",
    topicDate: "April 1st 2022",
    numOfFollowers: 20000000,
    IsThereImages: true,
    getTopicData: function(){
        return `El nombre del ${this.topicType} topic de Twitter es: ${this.topicName} y tiene ${this.numOfFollowers} followers!!`
    }
}

console.log(trendingTopic.getTopicData())
console.log("")

// TWITTER (hashtag)
const hashtag = {
    symbol: "#",
    topics: "all, whatever",
    functions: ["clicks", "tweets", "replies", "posts"],
    getInfoHashtag: function(){
        return `El hashtag en twitter se aplica primeramente con el simbolo "${this.symbol}" y tiene varias funciones que los represetan, los cuales son: ${this.functions}`
    }
}

console.log(hashtag.getInfoHashtag())
console.log("")

//////////////////////////////////////////////////////////////////////////////////////////
console.log(">> FACEBOOK (USER, POST, BIOGRAPHY)")
// FACEBOOK (user)
const facebookUser = {
    firstName: "Fernando",
    lastName: "de Lafuente",
    dateOfBirth: "nov 11 1988",
    userName: "Fernando de Lafuente",
    email: "fernando.delafuenteq@gmail.com",
    phoneNumber: 3333333333,
    getInfoUser: function(){
        return `Los datos del usuario de Facebook ${this.userName} es: su telefono es: ${this.phoneNumber} y su fecha de nacimiento es: ${this.dateOfBirth}`
    }
}

console.log(facebookUser.getInfoUser())
console.log("")

// FACEBOOK (post)
const post = {
    userNamePoster: "Fernando de Lafuente",
    postType: "image",
    postDate: new Date(),
    privacity: "TODOS",
    postPlace: "Grupo: Devs Community",
    getPostInfo: function(){
        return `Este post fue creado por ${this.userNamePoster} con visibilidad para ${this.privacity} y fue publicado en ${this.postPlace}, fecha: ${this.postDate}`
    }
}

console.log(post.getPostInfo())
console.log("")

// FACEBOOK (biography)
const biography = {
    firstName: "Fernando",
    lastName: "de Lafuente",
    dateOfBirth: "nov 11 1988",
    userName: "Fernando de Lafuente",
    email: "fernando.delafuenteq@gmail.com",
    phoneNumber: 3333333333,
    profilePhoto: "xxxxxxxxxxx.png",
    educationalRecords: ["a", "b", "c"],
    jobHistory: ["x", "y", "z"],

    getInfoBio: function(){
        return `Info en facebook de la biografia de ${this.userName} es:\n 
                Fecha de nacimiento: ${this.dateOfBirth}\n 
                Sus estudios son: ${this.educationalRecords}\n  
                Su historial laboral es: ${this.jobHistory}`
    }
}

console.log(biography.getInfoBio())
console.log("")


//////////////////////////////////////////////////////////////////////////////////////////
console.log(">> UBER (PROFILE, TRAVEL)")
// UBER (profile)
const uberProfile = {
    firstName: "Fernando",
    lastName: "de Lafuente",
    dateOfBirth: "nov 11 1988",
    email: "fernando.delafuenteq@gmail.com",
    phoneNumber: 3333333333,
    bankCardNumber: 1616161616161616,
    bankCardExpDate: "Nov 2022",
    profilePhoto: "x",

    getInfoUser: function(){
        return `Mi perfil de Uber incluye mi nombre ${this.firstName + " " + this.lastName}, telefono ${this.phoneNumber}, email ${this.email} y los datos protegidos de mi cuenta bancaria`
    }
}

console.log(uberProfile.getInfoUser())
console.log("")

// UBER (travel)
const travel = {
    emailAssociated: "fernando.delafuenteq@gmail.com",
    homeAddress: "calle juarez 555 guadalajara 44100",
    destinationAddress: "calle periferico 1234 guadalajara 44550",
    travelDay: "16 abril 2022",
    travelTime: "2:00pm",
    travelAmount: 200,
    fees: 10,
    promoDiscount: 50,
    specialCoupon: false,
    paymentMethod: "cash",

    getTravelInfo: function(){
        return `Este viaje programado desde ${this.homeAddress} hacia ${this.destinationAddress} es para el dia ${this.travelDay} hora ${this.travelTime} con un costo total de ${this.travelAmount + this.fees - this.promoDiscount} y sera pagado con ${this.paymentMethod} como metodo de pago`
    }
}

console.log(travel.getTravelInfo())
console.log("")

