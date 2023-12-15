document.addEventListener('DOMContentLoaded', function () {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const changeFavicon = () => {
        const favicon = document.getElementById('favicon');
        if (darkModeQuery.matches) {
            favicon.href = 'media/logo/loggi.png';
        } else {
            favicon.href = 'media/logo/image2vector.svg';
        }
    };
    
    changeFavicon();
    darkModeQuery.addEventListener('change', changeFavicon);
});