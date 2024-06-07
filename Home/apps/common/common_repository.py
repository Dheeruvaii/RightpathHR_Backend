class CommonRepository:
    @classmethod
    def create(cls, serializer_class, data):
        serializer_instance = serializer_class(data=data)
        serializer_instance.is_valid(raise_exception=True)
        instance = serializer_instance.save()
        return instance

    @classmethod
    def get_by_id(cls, model, id):
        print(id)
        return model.get(id=id)

    @classmethod
    def update(cls, instance, serializer_class, data):
        serializer_instance = serializer_class(instance, data=data, partial=True)
        serializer_instance.is_valid(raise_exception=True)
        updated_instance = serializer_instance.save()
        return updated_instance

    @classmethod
    def destroy(cls, instance):
        print(instance)
        instance.delete()
