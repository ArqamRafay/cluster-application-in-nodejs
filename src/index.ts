import { Server } from "./server";

export class Index {
    public server = new Server().app;

    init() {
        this.server.listen(5000, () => {
            console.log(`Server is running`);

        })
    }
}
