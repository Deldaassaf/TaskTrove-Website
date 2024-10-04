document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login .btn');
    const signupButton = document.querySelector('.register .btn');

    loginButton.addEventListener('click', async function(event) {
        event.preventDefault();

        const email = document.querySelector('.login input[type="email"]').value;
        const password = document.querySelector('.login input[type="password"]').value;

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                     email,
                     password 
                    })
            });

            if (response.ok) {
                // التعامل مع استجابة ناجحة هنا، مثل تحويل المستخدم إلى صفحة أخرى أو إظهار رسالة نجاح
                console.log('User logged in successfully');
            } else {
                // التعامل مع الأخطاء هنا، مثل عرض رسالة خطأ للمستخدم
                console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    });

    signupButton.addEventListener('click', async function(event) {
        event.preventDefault();

        const username = document.querySelector('.register input[type="text"]').value;
        const email = document.querySelector('.register input[type="email"]').value;
        const phone = document.querySelector('.register input[type="text"]').value;
        const password = document.querySelector('.register input[type="password"]').value;

        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, phone, password })
            });

            if (response.ok) {
                // التعامل مع استجابة ناجحة هنا، مثل تحويل المستخدم إلى صفحة أخرى أو إظهار رسالة نجاح
                console.log('User registered successfully');
            } else {
                // التعامل مع الأخطاء هنا، مثل عرض رسالة خطأ للمستخدم
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    });
});
