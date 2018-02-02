export class Recipe {
    private name: String;
    private description: String;
    private imagePath: String;

    constructor(name: String, desc: String, imagePath: String) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

    setName(name: String) {
        this.name = name;
    }
    setDescription(desc: String) {
        this.description = desc;
    }
    setImagePath(imagePath: String) {
        this.imagePath = imagePath;
    }

    getName(): String {
        return this.name;
    }
    getDescription(): String {
        return this.description;
    }
    getImagePath(): String {
        return this.imagePath;
    }
}
