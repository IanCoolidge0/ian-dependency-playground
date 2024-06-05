import Singletons from "./Singletons";

export class AppManager {
    getParagraph(): string {
        return Singletons.UIManager.ui();
    }

    token(): string {
        return "Hello World2";
    }
}