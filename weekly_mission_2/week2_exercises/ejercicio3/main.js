// Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.
////////////////////  UBER  ////////////////////////
console.log("UBER")

class uberProfile {
    constructor(firstName, lastName, dateOfBirth, email, phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
        this.email = email
        this.phoneNumber = phoneNumber
    }
    getInfoUser() {
        return `Mi perfil de Uber incluye mi nombre ${this.firstName + " " + this.lastName}, telefono ${this.phoneNumber}, email ${this.email} y fecha nacimiento ${this.dateOfBirth}`
    }
}

class uberTravel extends uberProfile {
    constructor(firstName, lastName, dateOfBirth, email, phoneNumber, homeAddress, destinationAddress, travelDate, totalAmount, paymentMethod){
        super(firstName, lastName, dateOfBirth, email, phoneNumber)
        this.homeAddress = homeAddress
        this.destinationAddress = destinationAddress
        this.travelDate = travelDate
        this.totalAmount = totalAmount
        this.paymentMethod = paymentMethod
    }
    getTravelInfo() {
        return `Este viaje de ${this.firstName + " " + this.lastName} programado desde ${this.homeAddress} hacia ${this.destinationAddress} para la fecha ${this.travelDate} con un costo total de ${this.totalAmount} y sera pagado con ${this.paymentMethod} como metodo de pago`
    }
}

const viajero = new uberTravel("Fernando", "de Lafuente", "11 nov 1988", "fernando.delafuenteq@gmail.com", 3333333333, "calle juarez 555 gdl 44100", "calle periferico 1234 gdl 44500", new Date(), 200, "cash")
console.log(viajero)
console.log(viajero.getTravelInfo())
console.log("")



////////////////////  FACEBOOK  ////////////////////////
console.log("FACEBOOK")

class facebookUser {
    constructor(fullName, email, phoneNumber, dateOfBirth, gender, profilePhoto){
        this.fullName = fullName
        this.email = email
        this.phoneNumber = phoneNumber
        this.dateOfBirth = dateOfBirth
        this.gender = gender
        this.profilePhoto = profilePhoto
    }
}

class facebookPost extends facebookUser {
    constructor(fullName, email, phoneNumber, dateOfBirth, gender, profilePhoto, postType, postDate, postPlace, privacity){
        super(fullName, email, phoneNumber, dateOfBirth, gender, profilePhoto)
        this.postType = postType
        this.postDate = postDate
        this.postPlace = postPlace
        this.privacity = privacity
    }
    getPostInfo() {
        return `This post created by ${this.fullName} was placed on ${this.postPlace} and was posted on ${this.postDate}. It was authenticated by email: ${this.email}`
    }
}

const fernandoPost = new facebookPost("Fernando de Lafuente", "fernando.delafuenteq@gmail.com", 3333333333, "11 nov 1988", "male", "abc.png", "image", new Date(), "Grupo Devs Community", "All people")
console.log(fernandoPost)
console.log(fernandoPost.getPostInfo())
console.log("")

