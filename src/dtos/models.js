export class OrderDTO {
    constructor(id, statusId, customerId, address, description) {
        this.id = id;
        this.statusId = statusId;
        this.customerId = customerId;
        this.address = address;
        this.description = description;
    }
}

export class StatusDTO {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}

export class CustomerDTO {
    constructor(id, phone, firstName, lastName){
        this.id = id;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
