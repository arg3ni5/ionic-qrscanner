export class Registry {
    public format: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(format: string, text: string) {
        this.format = format;
        this.text = text;
        this.created = new Date();
        this.determineType();
    }
    private determineType() {
        const initText = this.text.substr(0, 4);
        console.log("Tipo", initText);

        switch (initText) {
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;
            case 'geo:':
                this.type = 'geo';
                this.icon = 'map';
                break;
            default:
                this.type = 'No reconocido';
                this.icon = 'create';
                break;
        }

    }
}