/* I know that we will have 3 buttons

    default button

    inverted button

    google sign up button

        how to leverage this button type in order to show styling for 3 different kinds of buttons?

        we can create a variable
*/

import './Button.styles.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({ children, buttonType, ...otherProps}) {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}