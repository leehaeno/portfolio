
export const visible = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.4,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            delay:0.2,
        }
    }
}

export const overflow = {
    initial: {
        overflowY: "hidden"
    },
    enter: {
        overflowY: "auto",
    },
    exit: {
        overflowY: "hidden",
        transition: {
            //delay:0.6,
        }
    }
}

export const translate = {
    initial: {
        transform: "translateX(10%)"
        // transform: "scale(0.95)"
    },
    enter: {
        transform: "translateX(0%)",
        // transform: "scale(1)",
        transition: {
            duration: 1,
            ease:[0.22, 1, 0.36, 1]
        }
    },
    exit: {
        transform: "translateX(10%)",
        // transform: "scale(0.95)",
        transition: {
            duration: 0.6,
            ease:[0.83, 0, 0.17, 1]
        }
    }
}
