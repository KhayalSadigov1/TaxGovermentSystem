function signIn() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Bu kısımda kullanıcı doğrulama mantığını ekleyebilirsiniz.
    // Örneğin, hard-coded kullanıcı adı ve şifre kontrolü:

    if (username === 'kullaniciadi' && password === 'sifre') {
        alert('Giriş başarılı!');
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('signOutBtn').classList.remove('hidden');
    } else {
        alert('Kullanıcı adı veya şifre yanlış. Lütfen tekrar deneyin.');
    }
}

function signOut() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signOutBtn').classList.add('hidden');
    // İstediğiniz çıkış işlemlerini buraya ekleyebilirsiniz.
}

function navigateTo(page) {
    window.location.href = page;
}
