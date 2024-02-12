from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

def index(request):
    if request.user.is_authenticated:
        return render(request, 'index.html')  # Redirect to login page if user is not logged in
    return redirect('login')

def loginuser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request,user)  # Corrected: Pass request as first argument
            return redirect('/')  # Redirect to index page if login is successful
        else:
            return render(request, 'login.html')  # Render login page with error message
    return render(request, 'login.html')

def logoutuser(request):
    logout(request)  # Corrected: Use request.user to logout
    return redirect('login')  # Redirect to login page after logout

def registeruser(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')  # Corrected: Use 'password1' instead of 'password'
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            email = form.cleaned_data.get('email')
            user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()  # Corrected: Use UserCreationForm instead of CustomUserCreationForm
    return render(request, 'register.html', {'form': form})

