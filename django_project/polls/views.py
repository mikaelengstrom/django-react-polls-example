from django.urls import reverse
from django.views import generic
from rest_framework.generics import CreateAPIView
from rest_framework import permissions

from .models import Question
from .serializers import QuestionSerializer, VoteSerializer


class ReactMixin(object):
    template_name = 'polls/base.html'

    def get_context_data(self, *args, **kwargs):
        context = super(ReactMixin, self).get_context_data(*args, **kwargs)

        context['react_container'] = self.get_container_name()
        context['react_props'] = self.get_react_props(context)

        return context

    def get_container_name(self):
        if hasattr(self, 'container_name'):
            return self.container_name

        return self.__class__.__name__

    def get_react_props(self):
        raise NotImplementedError()


class IndexView(ReactMixin, generic.TemplateView):
    def get_react_props(self, context):
        first_question = Question.objects.first()
        return {
            'first_question_url': first_question.get_absolute_url()
        }


class DetailView(ReactMixin, generic.DetailView):
    model = Question

    def get_react_props(self, context):
        serialized = QuestionSerializer(context['object'])

        return {
            'question': serialized.data,
            'vote_url': reverse('polls:vote')
        }


class VoteView(CreateAPIView):
    serializer_class = VoteSerializer
    permission_classes = (permissions.AllowAny,)
