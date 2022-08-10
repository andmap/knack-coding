function removeDuplicated(arr) {
  const objectWithKeyAndId = arr.reduce(
    (acc, c) => Object.assign(acc, { [c.key]: c._id }),
    {}
  );

  const idsWithoutDuplicatedKeys = Object.keys(objectWithKeyAndId).map(
    (s) => objectWithKeyAndId[s]
  );

  const newArr = arr.filter((field) =>
    idsWithoutDuplicatedKeys.includes(field._id)
  );
  return newArr;
}
export function cleanUp(data) {
  const newVersions = data.versions.map((version) => {
    const newObjects = version.objects.map((obj) => {
      const newFields = removeDuplicated(obj.fields);
      return {
        ...obj,
        fields: newFields,
      };
    });

    const newScenes = version.scenes.map((scene) => {
      const newViews = removeDuplicated(scene.views);
      return {
        ...scene,
        views: newViews,
      };
    });
    return {
      ...version,
      objects: newObjects,
      scenes: newScenes,
    };
  });

  return { ...data, versions: newVersions };
}
