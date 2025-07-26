type Props = {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
};

export default function TagFilter({ tags, selectedTag, onTagSelect }: Props) {
  return (
    <div className="mb-6 flex flex-wrap gap-3 justify-center">
      <button
        className={`px-3 py-1 rounded-full text-sm ${
          selectedTag === null
            ? "bg-blue-500 text-white"
            : "bg-gray-700 text-gray-100 hover:bg-gray-600"
        }`}
        onClick={() => onTagSelect(null)}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === tag
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-100 hover:bg-gray-600"
          }`}
          onClick={() => onTagSelect(tag)}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
