import { ModelCollection } from "./interface/model.collection";

namespace Assign {
    /**
     * Since the constructor may be used in
     * multiple instances of Serializer by another
     * name, we need to assign a namespace with
     * the value set to the same value as the key
     * on the model collection
     * @param namespace 
     * @param models 
     */
    export function namespaceToModels(namespace: string, models: ModelCollection, ) {
        for (var iterator in models) {
            models[iterator][namespace] = iterator;
        }
    }

}

export default Assign;
