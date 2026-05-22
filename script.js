document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🐣 Welcome to Adriel\'s profile page!');
    
    const photo = document.querySelector('.profile-photo');
    if (photo) {
        photo.addEventListener('click', () => {
            alert('👋 Thanks for visiting!');
        });
    }
    
});
