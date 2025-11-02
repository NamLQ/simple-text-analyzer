<script lang="ts">
  import { countCharacters, countWords } from '$lib/utils/textUtils';

  let text = '';
  let wordCount = 0;
  let charCount = 0;

  // $: là "ma thuật" của Svelte. Khối code này sẽ tự động chạy lại mỗi khi `text` thay đổi.
  $: {
    wordCount = countWords(text);
    charCount = countCharacters(text);
  }

  function handleClear() {
    text = '';
  }
</script>

<main class="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6 md:p-8">
  <div class="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
    <h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
      Công cụ Đếm Từ & Ký Tự
    </h1>

    <div class="mb-4">
      <label for="text-input" class="sr-only">Nhập văn bản của bạn vào đây</label>
      <textarea
        id="text-input"
        class="w-full h-64 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-lg"
        placeholder="Nhập hoặc dán văn bản của bạn vào đây..."
        bind:value={text}
      ></textarea>
    </div>

    <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex gap-6 text-lg font-semibold text-gray-700">
        <p>Số từ: <span class="text-blue-600 font-bold">{wordCount}</span></p>
        <p>Số ký tự: <span class="text-blue-600 font-bold">{charCount}</span></p>
      </div>

      <button
        class="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out w-full sm:w-auto"
        on:click={handleClear}
      >
        Xóa
      </button>
    </div>
  </div>
</main>