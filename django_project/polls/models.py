from django.db import models
from django.urls import reverse


class Question(models.Model):
    question_text = models.CharField(max_length=200)

    def get_absolute_url(self):
        return reverse('polls:detail', kwargs={'pk': self.pk})

    @property
    def next_question(self):
        try:
            return Question.objects.filter(pk__gt=self.pk).first()
        except Question.DoesNotExist:
            return None

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE,
                                 related_name='choices')
    text = models.CharField(max_length=200)

    @property
    def votes(self):
        return Vote.objects.filter(choice=self).count()


class Vote(models.Model):
    choice = models.ForeignKey(Choice, on_delete=models.CASCADE)
