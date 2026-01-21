
export const visible = {
    
        initial: {
            visibility: 'visible'
        },
        enter: {
            visibility: 'hidden',
            transition: {
                delay: 1.4,
            }
        },
        exit: {
            visibility: 'visible',
            transition: {
                delay: 0,
            }
        }
    
}

export const text = {
    initial: {
        opacity: 1
    },
    enter: {
        opacity: 0,
        y: '-100vh',
        transition: {
            duration: 1,
            delay: 0.3,
            ease: [0.76, 0, 0.24, 1]
        },
        transitionEnd: {
            y: "100%"
        }
    },
    exit: {
        opacity: 1,
        y: "-0%",
        transition: {
            duration: 1,
            delay: 0.95,
            ease: [0.33, 1, 0.68, 1]
        }
    }
}
 
export const curve = (initialPath, topPath, bottomPath) =>{
    return{
        initial: {
            d: initialPath,
        },
        enter: {
            d: topPath,
            transition: {
                duration: 1,
                delay: .3,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        exit: {
            d: bottomPath,
            transition: {
                duration: 1,
                delay: .5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }
}

export const curve2 = (initialPath, topPath, bottomPath) =>{
    return{
        initial: {
            d: initialPath,
        },
        enter: {
            d: topPath,
            transition: {
                duration: 1,
                delay: .2,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        exit: {
            d: bottomPath,
            transition: {
                duration: 1,
                delay: .6,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }
}

export const translate = {
    initial: {
        y: "-300px"
    },
    enter: {
        y: "-100vh",
        transition: {
            duration: 1,
            delay: 0.4,
            ease: [0.76, 0, 0.24, 1]
        },
        transitionEnd: {
            y: "100vh"
        }
    },
    exit: {
        y: "0",
        transition: {
            duration: 1,
            delay: .3,
            ease: [0.76, 0, 0.24, 1]
        },
    }
}

export const translate2 = {
    initial: {
        y: "-300px"
    },
    enter: {
        y: "-100vh",
        transition: {
            duration: 1,
            delay: .3,
            ease: [0.76, 0, 0.24, 1]
        },
        transitionEnd: {
            y: "100vh"
        }
    },
    exit: {
        y: "0",
        transition: {
            duration: 1,
            delay:.4,
            ease: [0.76, 0, 0.24, 1]
        },
    }
}