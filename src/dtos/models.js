export class ResponseOrderDTO {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.room_number = data.room_number;
        this.state = data.state;
        this.isCleaningRequested = data.isCleaningRequested;
    }
}

export class OrderDTO {
    constructor(data) {
        this.x = data.x;
        this.y = data.y;
        this.room_number = data.room_number;
        this.state = data.state;
    }
}


export class CustomerCleaningOrderDTO {
    constructor(data) {
        this.id = data.id;
        this.passport = data.passport;
        this.hotelId = data.hotelId;
        this.roomId = data.roomId;
    }
}

export class StatusDTO {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
    }
}

export class CustomerDTO {
    constructor(data) {
        this.id = data.id;
        this.phone = data.phone;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}
