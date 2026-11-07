import json
import os
import torch


def export_weights(pth_path="dqn_model.pth", output_path="web/public/dqn_weights.json"):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    checkpoint = torch.load(pth_path, map_location="cpu", weights_only=True)

    exported = {}
    for n, state_dict in checkpoint.items():
        layers = {}
        for key, tensor in state_dict.items():
            # Arredonda para 5 casas decimais para manter o JSON leve na web
            layers[key] = [
                [round(float(v), 5) for v in row]
                if tensor.ndim == 2
                else round(float( row), 5)
                for row in tensor.tolist()
            ]
        exported[str(n)] = layers

    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(exported, f, separators=(",", ":"))

    size_kb = os.path.getsize(output_path) / 1024
    print(f"Pesos exportados com sucesso para '{output_path}' ({size_kb:.1f} KB)!")


if __name__ == "__main__":
    export_weights()
