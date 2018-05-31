from rest_framework import serializers
from .models import Question, Choice, Vote


class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = ('id', 'text', 'votes', )


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(many=True)

    class Meta:
        model = Question
        fields = ('id', 'question_text', 'choices', )


class VoteSerializer(serializers.ModelSerializer):
    choice = serializers.PrimaryKeyRelatedField(queryset=Choice.objects.all())
    votes = serializers.SerializerMethodField()
    next_question_url = serializers.SerializerMethodField()

    def get_votes(self, instance):
        return instance.choice.votes

    def get_next_question_url(self, instance):
        next_question = instance.choice.question.next_question
        return next_question.get_absolute_url() if next_question else None

    class Meta:
        model = Vote
        fields = ('choice', 'next_question_url', 'votes', )