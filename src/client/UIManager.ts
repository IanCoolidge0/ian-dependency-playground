import Singletons from "./Singletons";

export class UIManager {
    ui(): string {
        return Singletons.AppManager.token();
    }
}