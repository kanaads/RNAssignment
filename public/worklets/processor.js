class Processor extends AudioWorkletProcessor {
  process([inputs], [outputs]) {
   
    const input = inputs && inputs[0];
    const output = outputs && outputs[0];
    if (!input || !output) return true;

    const ch = Math.min(input.length, output.length);
    for (let i = 0; i < ch; i++) {
      output[i].set(input[i]);
    }
    return true; 
  }
}

registerProcessor("processor", Processor);
