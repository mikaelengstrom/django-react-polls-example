from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views

app_name = 'polls'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(), name='detail'),
    path('vote/', views.VoteView.as_view(), name='vote'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)