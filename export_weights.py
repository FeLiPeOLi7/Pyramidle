import json
import os
import torch
from ballsAI import QNetwork

def export_weights(pth_path="dqn_model.pth", output_dir="web/public"):
    os.makedirs(output_dir, exist_ok=True)
    checkpoint = torch.load(pth_path, map_location="cpu", weights_only=True)

    for n, state_dict in checkpoint.items():
        total_balls = (n * (n + 1)) // 2 # soma dos M primeiros naturais
        
        model = QNetwork(total_balls)

        model.load_state_dict(state_dict)
        model.eval()

        dummy_input = torch.zeros(1, total_balls, dtype=torch.float32)


        torch.onnx.export(
            model,                        
            dummy_input,                  
            f"{output_dir}/model_{n}.onnx",   
            input_names=["state"],      
            output_names=["q_values"],    
            dynamo=False,                 
        )


if __name__ == "__main__":
    export_weights()
