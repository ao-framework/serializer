namespace Exceptions {
    /**
     * Represents a core exception
     * in Serializer.
     */
    export class Exception {
        /**
         * Creates an instance of
         * an exception
         * @param namespace The namespace of the Serializer instance
         * @param message The exception message
         */
        public constructor(
            public namespace: string,
            public message: string
        ) { }

        /**
         * Handles toString() for the console.
         */
        public toString() {
            return `[@ao-framework/serializer][${this.namespace}] ${this.message}`;
        }
    }

    /**
     * Quick factory for creating an 
     * exception. This helps with testing.
     * and getting coverage.
     * @param namespace 
     * @param message 
     */
    export function blow(namespace: string, message: string) {
        message = message.replace(/\s\s+/g, ' ');
        throw new Exception(namespace, message);
    }

    /**
     * Throws an exception any time there is 
     * problem with graph in deserialization.
     * @param namespace 
     */
    export function invalidGraph(namespace: string) {
        throw new Exception(namespace, "Invalid graph; state has been corrupted. Could not parse.");
    }

    /**
     * Throws an error when the pointers property,
     * in deserialization is not an array.
     * @param namespace 
     */
    export function invalidPointerSet(namespace: string) {
        throw new Exception(namespace, "Invalid pointer set; state has been corrupted. Could not parse.")
    }

    /**
     * Throws an error when deserialization 
     * can not find a pointer.
     * @param namespace 
     */
    export function invalidPointer(namespace: string) {
        throw new Exception(namespace, "Invalid pointer; state has been corrupted. Could not parse.")
    }
}

export default Exceptions;
