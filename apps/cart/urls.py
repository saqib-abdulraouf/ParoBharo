from django.urls import path
from apps.cart.views import CartView

app_name = 'cart'

urlpatterns = [
    path('', CartView.as_view(), name='cart_detail'),
]
