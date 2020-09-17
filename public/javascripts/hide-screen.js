$('<a>', {
    text: 'Hide the screen',
    role: 'presentation',
    'aria-hidden': 'true',
    href: window.location.origin + window.location.pathname + '?sr=true',
    css: {
        position: 'absolute',
        top: 0,
        left: 0
    },
}).prependTo('body')