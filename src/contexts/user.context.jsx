import { createContext, useState } from "react";

// creating context and putting the result in a variable
// can pass an initial (default) value to the value prop to when we call createContext()

// we will export both the UserContext and the Provider


// the actual value I want to access
export const UserContext = createContext({
    // building the empty state of what the provider current state is,
    // Usually the empty state of an object should be null because you want a null check to define whether or not you have an existing  user object (empty object still evaluate to true);
    currentUser: null,
    //default value of a setter function, it is a function that does nothing
    setCurrentUser: () => null,
});

// provider is the actual component
export const UserProvider = ({ children}) => {
    // I want to store a user object, to store a user state I use the hook useState
    const [currentUser, setCurrentUser] = useState(null);
    // next I generate the value that will be passed into the provider value, this will be an object that passed the 2 values that are important
    const value = {currentUser, setCurrentUser};
    // this provider will receive the value that will hold the actual contextual values
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
// the provider above is essentially allowing any of its child components to access the values inside of its useState