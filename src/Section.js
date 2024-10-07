// import { Children } from "react";

export default function Section( { children, id } ) {
    return (
        <section id={id}>
            {children}
        </section>
    );
}