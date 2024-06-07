from django.contrib import admin
from django.urls import path
from .views import RegisterView, LoginView, VerifyOTPView

from rest_framework.routers import DefaultRouter

router = DefaultRouter()


urlpatterns = router.urls

urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginView.as_view(), name="login"),
    path("verify-otp/", VerifyOTPView.as_view(), name="verify-otp"),
]
